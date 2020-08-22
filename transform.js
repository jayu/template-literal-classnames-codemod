const nodePath = require('path');
const CLASSNAMES_IDENTIFIER_NAME = 'cx';

const getClassNames = string => {
  return string
    .trim()
    .split(/\s/)
    .filter(name => name.length > 0);
};

const _createClassNameMemberExpression = j => className => {
  return j.memberExpression(
    j.identifier(GLOBAL_STYLES_IDENTIFIER_NAME),
    j.stringLiteral(className),
    true // computed to have square brackets
  );
};

const _createCxCallExpression = j => args => {
  return j.callExpression(j.identifier(CLASSNAMES_IDENTIFIER_NAME), args);
};

const _createImportDeclaration = j => (identifierName, source) => {
  return j.importDeclaration(
    [j.importDefaultSpecifier(j.identifier(identifierName))],
    j.stringLiteral(source)
  );
};

const _getLastLibImport = j => ast => {
  let firstImport = null;
  let lastLibImport = null;
  const importDeclarations = ast.find(j.ImportDeclaration);

  importDeclarations.forEach((path, i) => {
    const importSource = path.node.source.value;
    if (i === 0) {
      firstImport = path;
    }
    if (importSource.charAt(0) !== '.') {
      lastLibImport = path;
    }
    
  });
  return lastLibImport || firstImport
};

module.exports = (fileInfo, api) => {
  const filePath = fileInfo.path;
  const j = api.jscodeshift;
  const createClassNameMemberExpression = _createClassNameMemberExpression(j);
  const createCxCallExpression = _createCxCallExpression(j);
  const createImportDeclaration = _createImportDeclaration(j);
  const ast = j(fileInfo.source);

  const lastLibImport = _getLastLibImport(j)(ast);
  const shouldInsertCXImport = false;
  
  if (shouldInsertCXImport) {
    importCXAfter.insertAfter(
      createImportDeclaration(CLASSNAMES_IDENTIFIER_NAME, 'classnames')
    );
  }

  return ast.toSource({ quote: 'single' });
};