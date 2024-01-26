import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";
  import MainLayout from '../layouts/MainLayout'
  import MainView from '../views/MainView'
  import EventsView from '../views/EventsView'
  import AboutView from '../views/AboutView'
  import EventDetailView from '../views/EventDetailView'

  function Router () {
    return (
      <BrowserRouter basename="/">
        <MainLayout>
        <Routes>
            <Route path="/" element={<MainView />} />
            <Route path="/events" element={<EventsView />} />
            <Route path="/events/:eventId" element={<EventDetailView />} />
            <Route path="/about" element={<AboutView />} />
        </Routes>
        </MainLayout>
      </BrowserRouter>
    );
  }

  export default Router