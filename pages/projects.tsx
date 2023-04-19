import Container from '../components/Container';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <Container title="Projects | Hyemin's blog">
      <div className='mt-2'>
        <h1 className='mb-10 text-4xl font-extrabold text-slate-200'>
          Projects
        </h1>
        <section className='my-10'>
          <ProjectCard
            image='/appleOrder.JPG'
            name='Message Book'
            description='좋아하는 사람에게 응원의 메세지를 남길 수 있는 메세지북을 만드는 웹 어플리케이션입니다.'
            stack={['NextJS', 'TypeScript', 'Recoil', 'Planet Scale', 'Prisma']}
            github='https://github.com/dkssyddico/message-book'
            site='https://github.com/dkssyddico/message-book'
          />
          <ProjectCard
            image='/appleOrder.JPG'
            name='Apple Order'
            description='가상으로 사과를 주문할 수 있는 웹 어플리케이션입니다. (헤로쿠 서버 만료로 배포 사이트 제공 불가)'
            stack={['React', 'NodeJS', 'Express', 'MongoDB', 'Redux']}
            github='https://github.com/dkssyddico/apple-order'
            site='https://github.com/dkssyddico/apple-order'
          />
        </section>
      </div>
    </Container>
  );
}
