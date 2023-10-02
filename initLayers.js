import { glob } from "./node_modules/glob/dist/esm/glob.js";
const globPromise = promisify(glob)


async function importFile(filePath) {
    return (await import(filePath))?.default
}

function onEachFeature(feature, layer) {
    // do something with the features here (bind popups, etc.)
    /*
    layer.setStyle({
      weight: 10,
      color: 'green',
      fillOpacity: 0,
    })
    */
    layer.setStyle(defaultStyle)

    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
    });
}

export async function register(Leaflet) {
    //Commands
    const datasets = []
    const mappedLayers = {}
    const layerFiles = await globPromise(
        `layers/*{.js}`
    );
    layerFiles.forEach(async filePath => {
        const layer = await importFile(filePath)
        if (!layer.name) return;
        let data = Leaflet.geoJSON(layer, {onEachFeature: onEachFeature})
        datasets.push(data)
        mappedLayers[layer.name] = data
        
        // handle starting layer
    })
    console.table(layerFiles)
    return {"datasets":datasets,"mappedLayers":mappedLayers}
}