import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 20,
  },

  // imagem superior (logo principal)
  img: {
  width: 90,
  aspectRatio: 1,  // mantém proporção 1:1
  borderRadius: 45, // metade do tamanho para deixar arredondada
    resizeMode: 'cover', // preenche o círculo
    marginBottom: 10,
  },

  titulo: {
    color: '#32CD32',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },

  descricao: {
    color: '#ccc',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },

  card: {
    backgroundColor: '#107C10',
    borderRadius: 14,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    overflow: 'hidden',
  },

  cardImg: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 8,
  },

  cardTexto: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default estilos;
