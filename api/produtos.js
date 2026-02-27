export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    const produtos = [
        {
            id: '1',
            category: 'Passeio',
            title: '175/70 R14 • Linha Econômica',
            price: 279.90
        }
    ];
    
    res.status(200).json(produtos);
}
