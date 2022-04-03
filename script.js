const cubism4Model = "./Live2D/mk1.model3.json";

(async function main() {
  const app = new PIXI.Application({
    view: document.getElementById("canvas"),
    autoStart: true,
    resizeTo: window,
  });

  const model4 = await PIXI.live2d.Live2DModel.from(cubism4Model);

  app.stage.addChild(model4);

  model4.width = window.innerWidth;
  model4.scale.set(model4.scale.x);
})();
