(function () {
  exports.draw = function draw (Settings, CenterX, CenterY, outerRadius) {
    let sin = Math.sin, cos = Math.cos;
    let twoPi = 2*Math.PI;

    g.setColor(Settings.Foreground === 'Theme' ? Theme.fg : Settings.Foreground || '#000000');

    let withDots = Settings.withDots;
    if (withDots) {
      for (let i = 0; i < 60; i++) {
        let Phi = i * twoPi/60;

        let x = CenterX + outerRadius * sin(Phi);
        let y = CenterY - outerRadius * cos(Phi);

        g.fillCircle(x,y, 1);
      }
    }

    g.setFont('Vector', 22);
    g.setFontAlign(0,0);

    let innerRadius = (withDots ? outerRadius * 0.9 - 10 : outerRadius);
    for (let i = 0; i < 12; i++) {
      let Phi = i * twoPi/12;

      let x = CenterX + innerRadius * sin(Phi);
      let y = CenterY - innerRadius * cos(Phi);

      g.drawString(i == 0 ? '12' : '' + i, x,y);
    }
  };
})();
