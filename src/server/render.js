import { getAssets } from './assets';

const render = ({ cleintStats }) => (req, res) => {
    const { scripts, stylesheets } = getAssets(cleintStats);
    res.render('index', {
        scriptSources: scripts,
        styleSources: stylesheets,
        publicPath: clientStats.publicPath
    });
};

export default render;
