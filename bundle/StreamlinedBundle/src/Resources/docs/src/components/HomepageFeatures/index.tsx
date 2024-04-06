import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Powerful User Configuration & Customization',
        Svg: require('@site/static/img/undraw_advanced_customization_re_wo6h.svg').default,
        description: (
            <>
                With our platform, you get the power to tailor your experience, adjusting text, modifying templates, and
                revamping pages at will. It's flexibility at your fingertips.
            </>
        ),
    },
    {
        title: 'Modern Design provided by TailwindCSS',
        Svg: require('@site/static/img/undraw_modern_design_re_dlp8.svg').default,
        description: (
            <>
                The platform sports a contemporary aesthetic, providing a visually pleasing interface that enhances user
                engagement and experience.
            </>
        ),
    },
    {
        title: 'Direct Linking to Specific Pages or Features',
        Svg: require('@site/static/img/undraw_share_link_re_54rx.svg').default,
        description: (
            <>
                Enable users to create links for quick navigation to specific service pages or features, simplifying the
                user experience.
            </>
        ),
    },

];

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h1 style={{marginTop: "3rem"}}>Main Features</h1>
            <section className={styles.features}>
                <div className="container">
                    <div className="row">
                        {FeatureList.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
