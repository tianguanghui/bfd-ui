import d3 from 'd3'

export default (env, flag) => {

  //clear tooltip.
  d3.select(env.container).selectAll('.bcharts-tooltip').remove();
  const h = d3.select(env.container).select('.pie-legend')[0][0].offsetHeight;
  //添加一个提示框
  const tooltip = d3.select(env.container)
    .append('div')
    .style({
      position: 'absolute',
      opacity: 0,
      'pointer-events': 'none'
    })
    .attr('class', 'bcharts-tooltip');

  env.svg.select('.pie-slices').selectAll('path').on('mouseover', function(d) {
      //计算份额的百分比
      let percent = Number(d.value) / d3.sum(flag ? env.config.data : env.config.dataLegend, function(d) {
        return d.value;
      }) * 100;
      tooltip.html(env.config.name + '<br/>' + d.data.name + ':' + d.data.value + '(' + percent.toFixed(0) + '%)')
        .style('left', (d3.event.offsetX) + 'px')
        .style('top', (d3.event.offsetY + h + 20) + 'px')
        .style('opacity', 1.0);
    })
    .on('mousemove', function(d) {
      /* left 和 top 来改变提示框的位置 */
      tooltip.style('left', (d3.event.offsetX) + 'px')
        .style('top', (d3.event.offsetY + h + 20) + 'px');
    })
    .on('mouseout', function(d) {
      tooltip.style('opacity', 0.0);
    });
}