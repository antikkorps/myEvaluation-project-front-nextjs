import styles from './page.module.css';
import { LoginButton } from '../components/buttons.components';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <main className={styles.main}>
      <Container>
        <Box>
          <Card>
            <Typography variant='h2'>This is the home Page</Typography>
          </Card>
        </Box>
      </Container>
      <p>
        This is the homepage of an evaluation app built with Next.js and
        Express.
      </p>
      <p>To get started, click on the button below.</p>
      <LoginButton />
    </main>
  );
}
