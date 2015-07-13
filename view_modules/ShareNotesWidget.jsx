var ShareNotesWidget;
var ShareNotesHostWidget = React.createClass({
  translateText:function(){
    marked.setOptions({
      renderer: new marked.Renderer(),
    });
    var text=this.refs.input.getDOMNode().value;
    this.refs.display.getDOMNode().innerHTML = marked(text);

  },
  render : function(){
    return(
    <div>
      <textarea ref="input"></textarea>
      <div ref="display"></div>
      <button onClick = {this.translateText}>Trans</button>
    </div>)
  }
});
var HostInputWidget;
var ShareNotesClientWidget;
