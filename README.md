# generator-lgb 脚手架 (基于[bootstrap](http://www.bootcss.com/)定制)
同 [generator-lg](https://github.com/liubiao0810/generator-lg)完全一样只是集成了以下公共库
1. [bootstrap](http://www.bootcss.com/)
2. [twbs-pagination](http://esimakin.github.io/twbs-pagination/)
3. [bootbox弹窗](http://bootboxjs.com/)

命名：前朱雀为陵光,后玄武为执名,左青龙为孟章,右白虎为咸池
第一组开源项目统一用`lg(陵光，朱雀)`

> generator-lgb
## Installation

First, install [Yeoman](http://yeoman.io) and generator-lg using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
[sudo] npm install -g yo
[sudo] npm install -g generator-lgb
```

Then generate your new project:

```bash
yo lgb
```
目录生成成功后，请阅读：[README.md](https://github.com/liubiao0810/generator-lg/blob/dev/generators/app/templates/README.md)

项目架子初始化完成（注意：这时只有index示例页面）,目录结构如下：

    test
        ├── .gitignore
        ├── README.md
        ├── package.json
        ├── dist/
        ├── gulpfile.js
        └── src/
            ├── app/
            |   ├──example
            |   |  ├──index.tpl.html
            |   |  ├──index.css
            |   |  ├──index.js
            |   ├──components
            │   ├── config-router.js
            │   ├── index.css
            │   ├── index.html
            │   └── index.js
            ├── asset/
            │   └── img
            └── mock/
                |── GET/
                └── POST/

#具体请阅读 [wiki](https://github.com/liubiao0810/generator-lg/wiki)

## License

MIT © [花夏](fex.onlove.cc)