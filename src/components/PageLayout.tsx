import React from 'react';

const PageLayout = ({ children }: { children: any }) => {
	return <div className='max-w-[1000px] mx-auto mt-5'>{children}</div>;
};

export default PageLayout;
