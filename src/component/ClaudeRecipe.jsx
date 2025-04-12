import ReactMarkdown from "react-markdown";

const ClaudeRecipe = (props) => {
    return (
        <>
            {props.showRecipeContainer ? (
                <section className="mt-8 max-w-2xl mx-auto bg-white p-10 rounded-lg shadow-lg leading-relaxed text-gray-800">
                    <ReactMarkdown
                        components={{
                            h1: ({...props}) => (
                                <h1 className="text-3xl font-bold mb-4 text-indigo-600" {...props} />
                            ),
                            h2: ({...props}) => (
                                <h2 className="text-2xl font-semibold mt-6 mb-3 text-indigo-500" {...props} />
                            ),
                            p: ({...props}) => (
                                <p className="mb-4 text-base" {...props} />
                            ),
                            ul: ({...props}) => (
                                <ul className="list-disc pl-6 mb-4" {...props} />
                            ),
                            ol: ({...props}) => (
                                <ol className="list-decimal pl-6 mb-4" {...props} />
                            ),
                            li: ({...props}) => (
                                <li className="mb-1" {...props} />
                            ),
                            strong: ({...props}) => (
                                <strong className="font-semibold text-black" {...props} />
                            ),
                            code: ({...props}) => (
                                <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono" {...props} />
                            ),
                            blockquote: ({...props}) => (
                                <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600" {...props} />
                            )
                        }}
                    >
                        {props.showRecipe}
                    </ReactMarkdown>
                </section>
            ) :  null}
        </>
    );
};

export default ClaudeRecipe;
