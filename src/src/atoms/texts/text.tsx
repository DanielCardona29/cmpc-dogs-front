import React from 'react';

interface TextInter {
    text: string
}

const Text: React.FC<TextInter> = (props) => {
    return <span>{props.text}</span>
}

export default Text;