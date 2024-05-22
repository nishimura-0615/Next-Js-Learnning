// ServerComponent（サーバーコンポーネント)ではuseStateやonClickイベントは使えない
const ServerComponent = () => {
  console.log('Server Component')
  // useState()
  return <div>ServerComponent</div>;
};

export default ServerComponent;
