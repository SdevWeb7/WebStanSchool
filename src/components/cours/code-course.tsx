import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {cn} from "@/lib/utils";


type CodeCourseProps = {
    langage: string;
    children: string | string[];
    indentation?: number;
    className?: string;
};
export default function CodeCourse({children, langage, indentation, className} : CodeCourseProps) {


    return <div className={cn("w-fit", className)}>
    <SyntaxHighlighter
        language={langage}
        style={solarizedlight}
        wrapLongLines={true}
        customStyle={{margin: "0", padding: `0 10px 0 ${indentation? 20*indentation+10 : 10}px`}}>
            {children}
    </SyntaxHighlighter>
    </div>
}
