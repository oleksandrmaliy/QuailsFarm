import { Container } from '../components/container.jsx';
import { Navigation } from '../components/navigation.jsx';

export const Header = () => {
  return (
    <header className="flex items-center p-2 mb-4 bg-green-500">
      <Container>
        <div className="flex flex-row w-full max-w-[639px] mx-auto items-center gap-2 p-2 rounded-xl bg-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="currentColor"
            className="w-16 h-16 flex-shrink-0 text-white"
          >
            <path d="M94.909,75.683c-0.384-3.974-1.937-6.901-4.26-8.029c-2.293-1.114-5.557-0.501-8.952,1.681  c-1.724,1.108-3.33,2.522-4.664,4.074c-1.831-3.904-4.882-7.333-8.395-7.333c-5.486,0-10.368,8.792-10.368,15.722  c0,5.717,4.651,10.368,10.368,10.368c2.894,0,5.62-1.208,7.565-3.288c0.857,0.916,1.882,1.679,3.045,2.243  c1.434,0.696,2.974,1.047,4.522,1.047c1.142,0,2.288-0.191,3.399-0.575c2.617-0.905,4.725-2.776,5.935-5.267  C94.584,83.28,95.259,79.301,94.909,75.683z M73.981,85.187c0.2,0.578,0.45,1.13,0.74,1.654c-1.496,1.805-3.716,2.864-6.083,2.864  c-4.36,0-7.907-3.547-7.907-7.907c0-5.949,4.36-13.261,7.907-13.261c2.336,0,5.093,2.981,6.694,7.161  c-0.328,0.519-0.624,1.043-0.879,1.567C73.243,79.757,73.075,82.57,73.981,85.187z M90.89,85.252c-0.923,1.9-2.53,3.326-4.526,4.017  c-1.996,0.69-4.141,0.563-6.041-0.36c-1.9-0.923-3.326-2.53-4.017-4.526c-0.691-1.996-0.563-4.141,0.36-6.041  c1.26-2.593,3.638-5.186,6.361-6.936c1.875-1.205,3.663-1.842,5.071-1.842c0.558,0,1.056,0.1,1.476,0.304  c1.512,0.734,2.59,2.997,2.886,6.052C92.768,79.107,92.181,82.595,90.89,85.252z M83.645,81.444c-0.777,0-1.406-0.63-1.406-1.406  c0-0.777,0.63-1.406,1.406-1.406c0.777,0,1.406,0.63,1.406,1.406C85.052,80.814,84.422,81.444,83.645,81.444z M68.528,82.147  c0,0.777-0.63,1.406-1.406,1.406c-0.12,0-0.234-0.019-0.345-0.048c0.066,0.194,0.103,0.402,0.103,0.619  c0,1.068-0.866,1.934-1.934,1.934c-1.068,0-1.934-0.866-1.934-1.934s0.866-1.934,1.934-1.934c0.282,0,0.549,0.062,0.791,0.17  c-0.011-0.07-0.022-0.141-0.022-0.214c0-0.777,0.63-1.406,1.406-1.406C67.898,80.74,68.528,81.37,68.528,82.147z M81.976,84.285  c0,1.165-0.944,2.109-2.109,2.109c-1.165,0-2.109-0.944-2.109-2.109c0-1.165,0.944-2.109,2.109-2.109  C81.031,82.176,81.976,83.12,81.976,84.285z M87.439,85.179c0,0.971-0.787,1.758-1.758,1.758c-0.971,0-1.758-0.787-1.758-1.758  s0.787-1.758,1.758-1.758C86.652,83.421,87.439,84.208,87.439,85.179z M68.215,23.638l5.266-15.817h-9.843  c-7.694,0-13.932,6.238-13.932,13.932l0.056,7.193l-0.003,0.003c0.079,5.595-1.298,11.141-4.083,16.166  c-4.211,7.599-11.128,13.105-19.478,15.501L5.613,66.539C4.562,72.635,4.832,79.057,6.655,85.4l0.135,0.461l27.215-7.826  l3.229,11.507h-2.013l-1.713,2.636h17.59l-2.636-2.636h-8.488l-3.434-12.235l7.371-2.122c19.956-5.727,31.489-26.549,25.755-46.502  L68.215,23.638z M62.894,15.074c-1.091,0-1.977-0.886-1.977-1.977s0.886-1.977,1.977-1.977c1.094,0,1.977,0.886,1.977,1.977  S63.988,15.074,62.894,15.074z M35.678,33.001l11.443-3.292c-0.05,4.895-1.313,9.729-3.751,14.132  c-3.868,6.984-10.224,12.042-17.898,14.245l-19.25,5.537C9.73,49.37,20.558,37.34,35.678,33.001z" />
          </svg>
          <h1 className="w-fit font-amatic text-6xl font-bold text-white rounded-lg">
            Шляхетна перепілка
          </h1>
        </div>
        <Navigation />
      </Container>
    </header>
  );
};
