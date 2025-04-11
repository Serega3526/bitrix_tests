import { Route, Routes } from 'react-router-dom';
import Main from '../pages/main/Main';
// import Test1 from '../pages/test1/index.html';

function AppRouter() {
  return (
    <Routes>
      <Route path="*" element={<Main />} />
      <Route path="/test1" element={<Main />} />
    </Routes>
  );
}

export default AppRouter;