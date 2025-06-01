const notes = require('./classify');

const addClassifyHandler = (request, h) => {
    console.log('payload:', request.payload); //

    const { image } = request.payload;

    if (!image || !image.hapi || !image._data) {
        return h.response({
        status: 'fail',
        message: 'Gambar tidak ditemukan dalam permintaan.',
        }).code(400);
    }

    // Langsung proses gambar dari memori (mock klasifikasi)
    const mockLabels = ['Organik', 'Anorganik'];
    const label = mockLabels[Math.floor(Math.random() * mockLabels.length)];
    const confidence = Math.random(); // Confidence antara 0-1

    return h.response({
        status: 'success',
        message: 'Gambar berhasil diklasifikasikan.',
        label,
        confidence,
    }).code(200);
};

module.exports = { addClassifyHandler };
