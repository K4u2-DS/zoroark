import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // fundo claro
    paddingVertical: 30,
    paddingHorizontal: 16,
  },
    scroll: {
    
    backgroundColor: '#181818',
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 18,
    paddingVertical: 24,
    paddingHorizontal: 18,
    marginBottom: 28,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  img: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
    marginBottom: 18,
  },
  titulo: {
    color: '#107C10',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    marginTop: 8,
  },
  subtitulo: {
    color: '#222',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  paragrafo: {
    color: '#222',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 0,
    lineHeight: 22,
  },
});

export default estilos;