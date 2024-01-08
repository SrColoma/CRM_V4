import { Space, Layout, Divider, Typography } from 'antd';
import logo from '@/style/images/logo-text-big.png';
import logoImg from '@/style/images/logowhite.png';
import useLanguage from '@/locale/useLanguage';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function SideContent() {
  const translate = useLanguage();
  return (
    <Content
      style={{
        padding: '150px 30px 30px',
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
        display: 'flex', // Agregado para activar Flexbox
        flexDirection: 'column', // Agregado para organizar los elementos en una columna
        justifyContent: 'center', // Centrar los elementos verticalmente
        alignItems: 'center', // Centrar los elementos horizontalmente
      }}
      className="sideContent"
    >
      {/* div de 100px */}
      <div style={{ height: '200px' }} />

      <img
        src={logoImg}
        alt="Logo"
        style={{
          margin: '0 20px', // Modificado para agregar espacio a los lados
          display: 'block',
        }}
        height={63}
        width={63}
      />
      <img
        src={logo}
        alt="Logo"
        style={{
          margin: '0 20px', // Modificado para agregar espacio a los lados
          display: 'block',
        }}
        height={63}
        width={220}
      />
    </Content>
  );
}