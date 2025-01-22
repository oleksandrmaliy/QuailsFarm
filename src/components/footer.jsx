import { Container } from './container';

export const Footer = () => {
  return (
    <footer className="flex items-center p-4 bg-primaryColor">
      <Container>
        <div className="w-full max-w-[639px] mx-auto flex flex-row items-center gap-2 p-2 rounded-xl bg-yellow-200">
          <h3 className="text-base mx-auto">Powered by MaliyCo</h3>
        </div>
      </Container>
    </footer>
  );
};
