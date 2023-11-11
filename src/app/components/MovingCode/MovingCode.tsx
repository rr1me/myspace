import s from './MovingCode.module.scss';
import hljs from 'highlight.js';

const MovingCode = () => {
	return (
		<div className={s.movingCode}>
			{Array(6).fill(<CodeElement/>)}
		</div>
	);
};

export default MovingCode;

const code = `
import { makeStyle } from '../../shared/utils';
import { Text, View } from '@react-pdf/renderer';
import Skill, { SkillType } from '../../elements/Skill';

const s = makeStyle({
  column: {
    display: 'flex',
    gap: 10,
    flexGrow: 1,
  },
  inner: {
    display: 'flex',
  },
  sphere: {
    alignSelf: 'center',
    fontSize: 10,
  },
});

type ChildrenWithDirection = {
  horizontal: boolean;
  elem: SkillColumnChildren;
};
type SkillColumnChildren =
  | SkillType
  | SkillType[]
  | ChildrenWithDirection
  | ChildrenWithDirection[];

const SkillColumn = ({
  sphere,
  children,
}: {
  sphere: string;
  children: SkillColumnChildren;
}) => {
  return (
    <View style={s.column}>
      <Text style={s.sphere}>{sphere}</Text>

      <SkillColumnInner>{children}</SkillColumnInner>
    </View>
  );
};

export default SkillColumn;

const SkillColumnInner = ({
  children,
  horizontal = false,
}: {
  children: SkillColumnChildren | ChildrenWithDirection[];
  horizontal?: boolean;
}) => {
  return (
    <>
      {children.constructor === Array ? (
        <View
          style={{
            ...s.inner,
            ...(horizontal
              ? { flexDirection: 'row', gap: 5 }
              : { flexDirection: 'column', gap: 3 }),
          }}
        >
          {typeof (children as ChildrenWithDirection[])[0]
            .horizontal !== 'undefined'
            ? children.map((x, i) => (
                <SkillColumnInner
                  key={i}
                  horizontal={(x as ChildrenWithDirection).horizontal}
                >
                  {(x as ChildrenWithDirection).elem}
                </SkillColumnInner>
              ))
            : children.map((x, i) => (
                <Skill key={i}>{x as SkillType}</Skill>
              ))}
        </View>
      ) : typeof (children as ChildrenWithDirection).horizontal !==
        'undefined' ? (
        <SkillColumnInner
          horizontal={(children as ChildrenWithDirection).horizontal}
        >
          {(children as ChildrenWithDirection).elem}
        </SkillColumnInner>
      ) : (
        <Skill>{children as SkillType}</Skill>
      )}
    </>
  );
};

`;

const CodeElement = () => {

	// hljs.highlightAll();

	return (
		<div className={s.codeElement}>
			<pre id="source1" className={s.anim} ><code id="source" className="language-typescript">
				{code}
    </code></pre>
		</div>
	);
};
