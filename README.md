# wap-css-example
Honest modular CSS example. Uses [wap-css](https://github.com/opudalo/wap-css). 

## Installation and running

```bash
git clone opudalo/wap-css-example
cd wap-css-example
npm i
```  
  
running  
```bash
grunt serve
```


## Webpack loaders configuration
Two loaders needed. 
- (apply hashes)[https://github.com/opudalo/wap-css-example/blob/master/loaders/apply_hash.js] to post-process CSS file  
- (extract hashes)[https://github.com/opudalo/wap-css-example/blob/master/loaders/get_hash.js] as a dictionary  


CSS loader configuration:

```js
{
  test: /\.css$/,
  loader: multi(
    'style-loader!css-loader!' + __dirname + '/loaders/apply_hash',
    __dirname + '/loaders/get_hash'
  )
}
```

