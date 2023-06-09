import Image from 'next/image';

const renderContentActive = (data, index, indexSlider) => {
    return (
        <>
            {index < 2 ? (
                <div className="active-content">
                    <h4 className="title">
                        {index === 1 ? data.item1.number : data.item2.number}
                    </h4>
                    <span className="description">
                        {index === 1
                            ? data.item1.description
                            : data.item2.description}
                    </span>
                </div>
            ) : (
                <button
                    onClick={() => {
                        indexSlider === 2 &&
                            fileDownloader(data.item3.link.url);
                    }}
                    className="active-content"
                >
                    <Image
                        className="icon-download"
                        src={data.item3.icon.sourceUrl}
                        width={64}
                        height={55}
                        alt={data.item3.icon.altText || 'download'}
                    />
                    <span className="description-icon">
                        {data.item3.description}
                    </span>
                </button>
            )}
        </>
    );
};

function fileDownloader(href) {
    const link = document.createElement('a');
    link.href = href;
    link.download = 'file';
    link.click();
}

export { renderContentActive };
