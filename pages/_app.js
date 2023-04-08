import "@/styles/globals.css";
import { wrapper } from "@/store";
import '@/firebase'
const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
