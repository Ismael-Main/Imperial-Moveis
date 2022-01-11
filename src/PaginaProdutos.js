import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './componentes/Header';
import ProdutosContainer from './componentes/ProdutosContainer';
import lista from './ListaProdutos';
const Produtos = () => {
  const { pathname } = useLocation();

  const [produtosCurrent, setprodutosCurrent] = React.useState({
    produtos: {
      produto1: {
        nome: '',
        classe: '',
        imagem: '',
        texto: '',
        preco: '',
      },
      produto2: {
        nome: '',
        classe: '',
        imagem: '',
        texto: '',
        preco: '',
      },
    },
  });

  function setarProdutos(produtos) {
    setprodutosCurrent({
      produtos: {
        produto1: {
          nome: produtos.produto1.nome,
          classe: produtos.produto1.classe,
          imagem: produtos.produto1.imagem,
          texto: produtos.produto1.texto,
          preco: produtos.produto1.preco,
        },
        produto2: {
          nome: produtos.produto2.nome,
          classe: produtos.produto2.classe,
          imagem: produtos.produto2.imagem,
          texto: produtos.produto2.texto,
          preco: produtos.produto2.preco,
        },
      },
    });
  }

  React.useEffect(() => {
    const { mesas, racks, cadeiras, decorativos } = lista;

    switch (pathname) {
      case '/produtos/mesa':
        setarProdutos({
          produto1: {
            nome: mesas.mesa1.nome,
            classe: mesas.mesa1.classe,
            imagem: mesas.mesa1.img,
            texto: mesas.mesa1.texto,
            preco: mesas.mesa1.preco,
          },
          produto2: {
            nome: mesas.mesa2.nome,
            classe: mesas.mesa2.classe,
            imagem: mesas.mesa2.img,
            texto: mesas.mesa2.texto,
            preco: mesas.mesa2.preco,
          },
        });

        break;
      case '/produtos/racks':
        setarProdutos({
          produto1: {
            nome: racks.rack1.nome,
            classe: racks.rack1.classe,
            imagem: racks.rack1.img,
            texto: racks.rack1.texto,
            preco: racks.rack1.preco,
          },
          produto2: {
            nome: racks.rack2.nome,
            classe: racks.rack2.classe,
            imagem: racks.rack2.img,
            texto: racks.rack2.texto,
            preco: racks.rack2.preco,
          },
        });
        break;
      case '/produtos/decorativos':
        setarProdutos({
          produto1: {
            nome: decorativos.decoracao1.nome,
            classe: decorativos.decoracao1.classe,
            imagem: decorativos.decoracao1.img,
            texto: decorativos.decoracao1.texto,
            preco: decorativos.decoracao1.preco,
          },
          produto2: {
            nome: decorativos.decoracao2.nome,
            classe: decorativos.decoracao2.classe,
            imagem: decorativos.decoracao2.img,
            texto: decorativos.decoracao2.texto,
            preco: decorativos.decoracao2.preco,
          },
        });
        break;
      case '/produtos/cadeiras':
        setarProdutos({
          produto1: {
            nome: cadeiras.cadeira1.nome,
            classe: cadeiras.cadeira1.classe,
            imagem: cadeiras.cadeira1.img,
            texto: cadeiras.cadeira1.texto,
            preco: cadeiras.cadeira1.preco,
          },
          produto2: {
            nome: cadeiras.cadeira2.nome,
            classe: cadeiras.cadeira2.classe,
            imagem: cadeiras.cadeira2.img,
            texto: cadeiras.cadeira2.texto,
            preco: cadeiras.cadeira2.preco,
          },
        });
        break;
      default:
        break;
    }
  }, [pathname]);

  return (
    <>
      <Header />
      <ProdutosContainer produtos={produtosCurrent} />
    </>
  );
};

export default Produtos;
