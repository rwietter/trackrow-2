import { GetServerSideProps } from 'next';

import { parseCookies } from 'nookies';

import { DatePicker } from '@/components/datepicker';
import { Layout } from '@/components/layout';
import { HeaderDashboard, Title } from '@/features/dashboard/styles';
import { useIsoWeek } from '@/hooks/useIsoWeek';

const Delete = () => {
  const [onChangeDate, disableDate] = useIsoWeek({ flag: 'delete' });
  return (
    <Layout>
      <HeaderDashboard>
        <Title>Semana atual</Title>
        <DatePicker
          onChangeDate={onChangeDate as any}
          disableDate={disableDate as (curr: unknown) => boolean[]}
        />
      </HeaderDashboard>
    </Layout>
  )
}

export default Delete;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = parseCookies(ctx)['auth::token'];

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {
      authenticated: true
    },
  }
}