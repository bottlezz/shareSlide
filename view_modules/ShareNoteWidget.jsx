var ShareNotesWidget;
var ShareNoteHostWidget = React.createClass({
  getInitialState: function() {
      return { pageContents:[]};
  },
  handleClick: function(i) {
    console.log(i);
    this.refs.display.getDOMNode().innerHTML = this.state.pageContents[i];
  },
  convertMD:function(){
    marked.setOptions({
      renderer: new marked.Renderer(),
    });
    var text=this.refs.input.getDOMNode().value;
    var convert = marked(text);
    this.setState({pageContents : convert.split('<hr>')});
    //this.refs.display.getDOMNode().innerHTML = marked(text);
  },
  render : function(){

    return(
    <div className="col-md-12">

      <nav>
        <ul className="pagination">
          {this.state.pageContents.map(function(data,index){
            return <li><a href="#" onClick = {this.handleClick.bind(this, index)}>{index+1}</a></li>;
          },this)}
        </ul>

      </nav>
      <div ref="display"></div>

      <div className="form-group">
        <label>Markdown Contents:</label>
        <textarea ref="input" rows="7" className="form-control" ></textarea>
      </div>
      <button onClick = {this.convertMD} className="btn">Trans</button>
    </div>);
  }
});
var HostInputWidget;
var ShareNoteClientWidget;
