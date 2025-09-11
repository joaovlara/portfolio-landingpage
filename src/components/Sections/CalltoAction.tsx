export default function CalltoAction() {
    return (
        <section className="w-full py-12 flex flex-col items-center justify-center text-center rounded-lg shadow-lg mt-12">
            <div className="container">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pronto para transformar seu projeto?</h2>
                <p className="text-lg md:text-xl text-white mb-8 max-w-xl mx-auto">Entre em contato e vamos criar algo incrível juntos! Estou disponível para novos desafios e oportunidades.</p>
                <a
                    href="#contato"
                    className="inline-flex items-center px-6 py-3 bg-white text-blue-700 font-semibold rounded-full shadow hover:bg-blue-100 transition-colors duration-200"
                >
                    Entrar em contato
                </a>

            </div>
        </section>
    )
}