import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
      
  },
  scrollContainer: {
  
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 20,
  },
  conteudo: {
    margin: 22,
    marginTop: 97,
    alignItems: 'center',
  },
  titulo: {

    color: '#21a020',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitulo: {
    color: '#eaeaea',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 18,
  },
  paragrafo: {
    color: '#eaeaea',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 22,
  },
  img: {
    width: '90%',
    height: 160,
    resizeMode: 'contain',
    marginTop: 24,
    borderRadius: 12,
  },
});

export default estilos;
