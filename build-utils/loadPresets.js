const webpackMerge = require('webpack-merge');

const applyPresets =(env)=>
{
    const {presets} = env;
    const mergedPresets = [].concat(...[presets]);
    const mergeConfigs = mergedPresets.map(
        presetName => require(`./presets/webpack.${presetName}`)(env));
        return webpackMerge({} , ...mergeConfigs); 
};

module.exports = applyPresets;