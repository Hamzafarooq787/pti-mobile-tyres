import parse,{domToReact,Element,type DOMNode} from 'html-react-parser';
import QuoteForm from './QuoteForm';
import Interactions from './Interactions';
export type PageContent={slug:string;html:string;styles:string[];cssFiles?:string[]};
export default function ReferencePage({content}:{content:PageContent}){return <>{content.cssFiles?.map(href=><link key={href} rel="stylesheet" href={href}/>)}<style dangerouslySetInnerHTML={{__html:content.styles.join('\n')}}/>{parse(content.html,{replace(node){if(node instanceof Element&&node.name==='form'){return <QuoteForm className={node.attribs.class}>{domToReact(node.children as DOMNode[])}</QuoteForm>;}}})}<Interactions key={content.slug}/></>}
