import React from 'react';

const Main = () => {
  return(
  <div className ='myProfile' id="Aldino">
    <div className = 'Dino'>
      <h3>My profile</h3>
      <table width="100%" border="1" cellspacing="0" cellpadding="5" align="center">
<tr className='Bio' align='center'>
<td >FOTO</td>
<td>DATA DIRI</td>
<td>KETERANGAN</td>
</tr>
<tr>
<td width='200px' rowspan="10" align="center"><img src="Aldino.jpg" alt="Aldino" /></td>
<td>Nama</td>
<td>MOCHAMAD ALDINO</td>
</tr>
<tr>
<td>PENDIDKAN</td>
<td>SMA</td>
</tr>
<tr>
<td>Jenis Kelamin</td>
<td>Laki-laki</td>
</tr>
<tr>
<td>Tempat/Tanggal Lahir </td>
<td>JAKARTA, 08 May 2000</td>
</tr>
<tr>
<td>RIWAYAT PENDIDIKAN</td>
<td>
SDN CIDENG 09 JAKARTA PUSAT
<br />
SMP NEGERI 3 OBI HAL-SEL
<br />
SMA NEGERI 3 KOTA TERNATE</td>
</tr>
<tr>
<td>Alamat</td>
<td>Jl. Nuku, Kel. Tanah Raja Kec.Ternate Tengah Kab. Kota Ternate</td>
</tr>
</table>
    </div>
  </div>
  )
}
export default Main ; 