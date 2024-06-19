function openLink(link) {
    return () => {
        window.open(link, '_blank', 'noopener,noreferrer');
    }
}

export default openLink;