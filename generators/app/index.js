const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    return this.prompt({
      type: 'input',
      name: 'componentName',
      message: 'Component Name: '
    }).then(answers => {
      this.props = answers;
    });
  }

  writing() {
    const {componentName} = this.props;
    this.log('componentName: ', componentName);
    this.fs.copyTpl(
        this.templatePath('component.js'),
        this.destinationPath(
          `${componentName}/${componentName}.js`
        ),
        {componentName}
    );
    this.fs.copyTpl(
        this.templatePath('index.js'),
        this.destinationPath(
          `${componentName}/index.js`
        ),
        {componentName}
    );
  }
};
