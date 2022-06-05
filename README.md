# BlazorJsInteropBoilerplate

The main goal of this side project was to create blank Blazor Server application and make use of Leafleat maps with it.

Due to pain caused by lack of strongly typed variables in callin BlazorJsInterop I decided to create little script to do it. It is far from being perfect but it works.

To make use of it hit 
```cd/JsLib```

modify it as you want, you may use _npm/yarn_ to add npm packages and bundle them up via webpack.
On calling
```npm run build```
webpack build will be run as well as _strongly_typed.js_ which will create _*JsLib*.cs_ file containing static class with static fields that can be referenced from main application. 
