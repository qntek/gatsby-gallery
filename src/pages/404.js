import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/Seo";
import '../styles/index.css';
const NotFoundPage = () => {
  return (
<main className='fixed bottom-0 left-0 right-0 top-0'>
			<Header />
			<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
				<p className='text-5xl font-bold md:text-6xl xl:text-7xl'>404 🗯️</p>
				<p className='mt-5 text-2xl font-bold md:text-4xl xl:text-4xl'>
					page not found
				</p>
			</div>
			<Footer />
		</main>
  );
};

export default NotFoundPage;

export const Head = () => <SEO title="404: Not found" />;
