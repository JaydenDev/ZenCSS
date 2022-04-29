module.exports.init = function() {
    console.log("This isn't the intended method to use this framework, please link node_modules/@jdev06/ZenCSS/zen.min.css");
};

if (module.parent) {
    module.exports.init();
}