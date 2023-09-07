import prykol from '../images/prykol.png';

const Home = () => {
    return (
        <>
          <img style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 300,
            height: 300,
          }} src={prykol} alt='nema prykola' />
        </>
      )
}

export default Home
