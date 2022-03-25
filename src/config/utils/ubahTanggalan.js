export function ubahTanggalan(date) {
    let ubahTanggal = date.split('-');
    let Bulan = [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember',
    ];

    let tempMonth = '';
    let splitBulan = ubahTanggal[1].split('');

    if (splitBulan[0] === '0') {
        tempMonth = splitBulan[1];
    } else {
        tempMonth = splitBulan.join('');
    }

    let hari = ubahTanggal[2];
    let bulan = Bulan[Number(tempMonth - 1)];
    let tahun = ubahTanggal[0];

    return hari + ' ' + bulan + ' ' + tahun;
}