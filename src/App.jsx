import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

import requestImagesByQuery from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState({
    imageSrc: "",
    imageAltDescription: "",
    imageDescription: "",
    imageAuthor: "",
    imageLikes: 0,
  });

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchPhotos = async () => {
      try {
        setError(false);
        setLoading(true);
        setLoadMoreBtn(false);
        const data = await requestImagesByQuery(query, page);
        if (data.total === 0) {
          setImages([]);
          toast("Sorry, we couldn't find any images! Please, try again!", {
            position: "top-right",
          });
        } else {
          setImages((prevImages) => [...prevImages, ...data.results]);
          setLoadMoreBtn(data.total_pages && data.total_pages !== page);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, [query, page]);

  const handleSearch = (searchQuery) => {
    if (searchQuery !== query) {
      setQuery(searchQuery);
      setPage(1);
      setImages([]);
    }
  };

  const handleSearchNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleImageClick = (imageData) => {
    setModalData(imageData);
    openModal();
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Toaster />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {loading && <Loader />}
      {loadMoreBtn && <LoadMoreBtn onLoadMore={handleSearchNextPage} />}
      <ImageModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        {...modalData}
      />
    </>
  );
}

export default App;
