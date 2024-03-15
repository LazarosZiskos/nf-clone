import { AddCircle, CancelRounded, RemoveCircle } from "@mui/icons-material";

const ModalComponent = ({ movie, closeModal }) => {
  console.log(movie);
  return (
    <div className="fixex !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide">
      {/* <button className="modal-close absolute" onClick={closeModal}>
        <CancelRounded className=" modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]" />
      </button> */}

      <div className="">
        <iframe
          src="https://www.youtube.com/watch?v=r8AWmr1K4hU&lc=UgyDn1hNTV_f1YrsBNR4AaABAg.A0z4PtpPz9iA0zgEu3n1NV"
          frameborder="0"
          allowFullScreen
          loading="lazy"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default ModalComponent;
