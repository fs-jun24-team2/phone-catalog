// Rights.tsx
import { useTranslation } from 'react-i18next';
import styles from './Rights.module.scss';

export const Rights = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['rights-container']}>
      <h1>{t('rights_title')}</h1>
      <section>
        <h2>{t('user_rights')}</h2>
        <ul>
          <li>{t('rights_access_information')}</li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            ratione voluptatem atque nesciunt. Dicta corrupti officia minus odit
            rerum dolorem vel omnis quasi. Necessitatibus quam, explicabo
            distinctio ducimus consequuntur, libero aspernatur hic reprehenderit
            veniam cumque, tenetur laudantium expedita tempore deleniti eius
            quis unde nesciunt voluptates odit accusamus nostrum voluptas
            molestiae.
          </p>
          <li>{t('rights_privacy')}</li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            ratione voluptatem atque nesciunt. Dicta corrupti officia minus odit
            rerum dolorem vel omnis quasi. Necessitatibus quam, explicabo
            distinctio ducimus consequuntur, libero aspernatur hic reprehenderit
            veniam cumque, tenetur laudantium expedita tempore deleniti eius
            quis unde nesciunt voluptates odit accusamus nostrum voluptas
            molestiae.
          </p>
          <li>{t('rights_security')}</li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            ratione voluptatem atque nesciunt. Dicta corrupti officia minus odit
            rerum dolorem vel omnis quasi. Necessitatibus quam, explicabo
            distinctio ducimus consequuntur, libero aspernatur hic reprehenderit
            veniam cumque, tenetur laudantium expedita tempore deleniti eius
            quis unde nesciunt voluptates odit accusamus nostrum voluptas
            molestiae.
          </p>
          <li>{t('rights_content_removal')}</li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            ratione voluptatem atque nesciunt. Dicta corrupti officia minus odit
            rerum dolorem vel omnis quasi. Necessitatibus quam, explicabo
            distinctio ducimus consequuntur, libero aspernatur hic reprehenderit
            veniam cumque, tenetur laudantium expedita tempore deleniti eius
            quis unde nesciunt voluptates odit accusamus nostrum voluptas
            molestiae.
          </p>
          <li>{t('rights_non_discrimination')}</li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            ratione voluptatem atque nesciunt. Dicta corrupti officia minus odit
            rerum dolorem vel omnis quasi. Necessitatibus quam, explicabo
            distinctio ducimus consequuntur, libero aspernatur hic reprehenderit
            veniam cumque, tenetur laudantium expedita tempore deleniti eius
            quis unde nesciunt voluptates odit accusamus nostrum voluptas
            molestiae.
          </p>
        </ul>
      </section>

      <section>
        <h2>{t('user_responsibilities')}</h2>
        <ul>
          <li>{t('responsibilities_compliance')}</li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            ratione voluptatem atque nesciunt. Dicta corrupti officia minus odit
            rerum dolorem vel omnis quasi. Necessitatibus quam, explicabo
            distinctio ducimus consequuntur, libero aspernatur hic reprehenderit
            veniam cumque, tenetur laudantium expedita tempore deleniti eius
            quis unde nesciunt voluptates odit accusamus nostrum voluptas
            molestiae.
          </p>
          <li>{t('responsibilities_respect_others')}</li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            ratione voluptatem atque nesciunt. Dicta corrupti officia minus odit
            rerum dolorem vel omnis quasi. Necessitatibus quam, explicabo
            distinctio ducimus consequuntur, libero aspernatur hic reprehenderit
            veniam cumque, tenetur laudantium expedita tempore deleniti eius
            quis unde nesciunt voluptates odit accusamus nostrum voluptas
            molestiae.
          </p>
          <li>{t('responsibilities_accurate_info')}</li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            ratione voluptatem atque nesciunt. Dicta corrupti officia minus odit
            rerum dolorem vel omnis quasi. Necessitatibus quam, explicabo
            distinctio ducimus consequuntur, libero aspernatur hic reprehenderit
            veniam cumque, tenetur laudantium expedita tempore deleniti eius
            quis unde nesciunt voluptates odit accusamus nostrum voluptas
            molestiae.
          </p>
          <li>{t('responsibilities_no_unauthorized_use')}</li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            ratione voluptatem atque nesciunt. Dicta corrupti officia minus odit
            rerum dolorem vel omnis quasi. Necessitatibus quam, explicabo
            distinctio ducimus consequuntur, libero aspernatur hic reprehenderit
            veniam cumque, tenetur laudantium expedita tempore deleniti eius
            quis unde nesciunt voluptates odit accusamus nostrum voluptas
            molestiae.
          </p>
          <li>{t('responsibilities_content_ownership')}</li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            ratione voluptatem atque nesciunt. Dicta corrupti officia minus odit
            rerum dolorem vel omnis quasi. Necessitatibus quam, explicabo
            distinctio ducimus consequuntur, libero aspernatur hic reprehenderit
            veniam cumque, tenetur laudantium expedita tempore deleniti eius
            quis unde nesciunt voluptates odit accusamus nostrum voluptas
            molestiae.
          </p>
        </ul>
      </section>

      <section>
        <h2>{t('company_rights')}</h2>
        <ul>
          <li>{t('company_rights_moderation')}</li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            ratione voluptatem atque nesciunt. Dicta corrupti officia minus odit
            rerum dolorem vel omnis quasi. Necessitatibus quam, explicabo
            distinctio ducimus consequuntur, libero aspernatur hic reprehenderit
            veniam cumque, tenetur laudantium expedita tempore deleniti eius
            quis unde nesciunt voluptates odit accusamus nostrum voluptas
            molestiae.
          </p>
          <li>{t('company_rights_service_availability')}</li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            ratione voluptatem atque nesciunt. Dicta corrupti officia minus odit
            rerum dolorem vel omnis quasi. Necessitatibus quam, explicabo
            distinctio ducimus consequuntur, libero aspernatur hic reprehenderit
            veniam cumque, tenetur laudantium expedita tempore deleniti eius
            quis unde nesciunt voluptates odit accusamus nostrum voluptas
            molestiae.
          </p>
          <li>{t('company_rights_terms_changes')}</li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            ratione voluptatem atque nesciunt. Dicta corrupti officia minus odit
            rerum dolorem vel omnis quasi. Necessitatibus quam, explicabo
            distinctio ducimus consequuntur, libero aspernatur hic reprehenderit
            veniam cumque, tenetur laudantium expedita tempore deleniti eius
            quis unde nesciunt voluptates odit accusamus nostrum voluptas
            molestiae.
          </p>
          <li>{t('company_rights_account_termination')}</li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            ratione voluptatem atque nesciunt. Dicta corrupti officia minus odit
            rerum dolorem vel omnis quasi. Necessitatibus quam, explicabo
            distinctio ducimus consequuntur, libero aspernatur hic reprehenderit
            veniam cumque, tenetur laudantium expedita tempore deleniti eius
            quis unde nesciunt voluptates odit accusamus nostrum voluptas
            molestiae.
          </p>
        </ul>
      </section>

      <section>
        <h2>{t('liability_limitations')}</h2>
        <p>{t('liability_text')}</p>
      </section>
    </div>
  );
};
