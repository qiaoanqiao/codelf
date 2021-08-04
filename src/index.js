var fundebug=require("fundebug-javascript");
fundebug.init({
  apikey: "20634a54043152c8d1a3a92054ad2412a1af0a591aaf11ed21ee5d046b4cb8d0"
})
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // 将component中的报错发送到Fundebug
    fundebug.notifyError(error, {
      metaData: {
        info: info
      }
    });
  }

  render() {
    if (this.state.hasError) {
      return null
      // 也可以在出错的component处展示出错信息
      // return <h1>出错了!</h1>;
    }
    return this.props.children;
  }
}

ReactDOM.render( < ErrorBoundary > < App / > < /ErrorBoundary>, document.getElementById('root'));
