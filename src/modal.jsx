import React,{ useState } from 'react';
import Modal from 'react-modal';

function Baru() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return(
  <div className="Aldino">
    <button onClick={() => setModalIsOpen(true)}>Pesan</button>
    <Modal className='modalIsOpen' isOpen={modalIsOpen} align="center">
      <h2>sabda Rasulullah S.A.W:</h2>
      <p><em>تَعَلَّمُوْاوَعَلِّمُوْاوَتَوَاضَعُوْالِمُعَلِّمِيْكُمْ وَلَيَلَوْا لِمُعَلِّمِيْكُمْ ( رَواهُ الطَّبْرَانِيْ)

Artinya, "Belajarlah kamu semua, dan mengajarlah kamu semua, dan hormatilah guru-gurumu, serta berlaku baiklah terhadap orang yang mengajarkanmu." (HR Tabrani)</em></p>
      <div>
      <button onClick={() => setModalIsOpen(false)}>close</button>
      </div>
      </Modal>
  </div>
  );
}
export default Baru ;