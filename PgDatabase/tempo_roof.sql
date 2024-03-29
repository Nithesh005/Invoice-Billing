PGDMP     )                    {         
   tempo_roof    15.2    15.2 d    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    37202 
   tempo_roof    DATABASE     }   CREATE DATABASE tempo_roof WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_India.1252';
    DROP DATABASE tempo_roof;
                postgres    false                        3079    37203    dblink 	   EXTENSION     :   CREATE EXTENSION IF NOT EXISTS dblink WITH SCHEMA public;
    DROP EXTENSION dblink;
                   false            �           0    0    EXTENSION dblink    COMMENT     _   COMMENT ON EXTENSION dblink IS 'connect to other PostgreSQL databases from within a database';
                        false    2                       1255    37249 #   save_value_to_user_access_control()    FUNCTION     �   CREATE FUNCTION public.save_value_to_user_access_control() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    INSERT INTO user_access_control (site_id,user_id)
    VALUES (NEW.site_id,NEW.user_id);
    RETURN NEW;
END;
$$;
 :   DROP FUNCTION public.save_value_to_user_access_control();
       public          postgres    false                       1255    37250    sync_user_id_in_credentials()    FUNCTION     �  CREATE FUNCTION public.sync_user_id_in_credentials() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO user_credential (user_id,user_name)
        VALUES (NEW.user_id,NEW.email);
    ELSIF TG_OP = 'UPDATE' THEN
        UPDATE user_credential
        SET user_name = NEW.email
        WHERE user_id = NEW.user_id;
    END IF;

    RETURN NEW;
END;
$$;
 4   DROP FUNCTION public.sync_user_id_in_credentials();
       public          postgres    false            �            1259    37251    alert_boundary    TABLE     
  CREATE TABLE public.alert_boundary (
    r_no integer NOT NULL,
    boundary_id character varying(100),
    boundary character varying(100),
    last_updated_by character varying(100) DEFAULT 'admin'::character varying,
    last_updated_on time without time zone
);
 "   DROP TABLE public.alert_boundary;
       public         heap    postgres    false            �            1259    37255    alert_boundary_boundary_id    SEQUENCE     �   CREATE SEQUENCE public.alert_boundary_boundary_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 1   DROP SEQUENCE public.alert_boundary_boundary_id;
       public          postgres    false    216            �           0    0    alert_boundary_boundary_id    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.alert_boundary_boundary_id OWNED BY public.alert_boundary.boundary_id;
          public          postgres    false    217            �            1259    37256    alert_boundary_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.alert_boundary_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.alert_boundary_r_no_seq;
       public          postgres    false    216            �           0    0    alert_boundary_r_no_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.alert_boundary_r_no_seq OWNED BY public.alert_boundary.r_no;
          public          postgres    false    218            �            1259    37257    alert_setting    TABLE       CREATE TABLE public.alert_setting (
    r_no integer NOT NULL,
    alert_setting_id character varying(100),
    alert_category character varying(100),
    last_updated_by character varying(100) DEFAULT 'admin'::character varying,
    last_update_on timestamp with time zone
);
 !   DROP TABLE public.alert_setting;
       public         heap    postgres    false            �            1259    37261    alert_setting_alert_id    SEQUENCE     �   CREATE SEQUENCE public.alert_setting_alert_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 -   DROP SEQUENCE public.alert_setting_alert_id;
       public          postgres    false    219            �           0    0    alert_setting_alert_id    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.alert_setting_alert_id OWNED BY public.alert_setting.alert_setting_id;
          public          postgres    false    220            �            1259    37262    alert_setting_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.alert_setting_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.alert_setting_r_no_seq;
       public          postgres    false    219            �           0    0    alert_setting_r_no_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.alert_setting_r_no_seq OWNED BY public.alert_setting.r_no;
          public          postgres    false    221            �            1259    37263 
   department    TABLE     �   CREATE TABLE public.department (
    r_no integer NOT NULL,
    department_name character varying(200),
    last_updated_by character varying(200),
    last_updated_on character varying DEFAULT CURRENT_TIMESTAMP,
    department_id character varying
);
    DROP TABLE public.department;
       public         heap    postgres    false            �            1259    37269    department_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.department_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.department_r_no_seq;
       public          postgres    false    222            �           0    0    department_r_no_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.department_r_no_seq OWNED BY public.department.r_no;
          public          postgres    false    223            �            1259    37270    location    TABLE     (  CREATE TABLE public.location (
    r_no integer NOT NULL,
    location_id character varying(200),
    location_name character varying(200),
    last_updated_by character varying(200),
    last_updated_on character varying DEFAULT CURRENT_TIMESTAMP NOT NULL,
    address character varying(200)
);
    DROP TABLE public.location;
       public         heap    postgres    false            �            1259    37276    location_location_id    SEQUENCE     �   CREATE SEQUENCE public.location_location_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 1000000
    CACHE 1;
 +   DROP SEQUENCE public.location_location_id;
       public          postgres    false    224            �           0    0    location_location_id    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.location_location_id OWNED BY public.location.location_id;
          public          postgres    false    225            �            1259    37277    location_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.location_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.location_r_no_seq;
       public          postgres    false    224            �           0    0    location_r_no_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.location_r_no_seq OWNED BY public.location.r_no;
          public          postgres    false    226            �            1259    37278 	   privilege    TABLE       CREATE TABLE public.privilege (
    r_no integer NOT NULL,
    privilege_id character varying(200),
    privilege character varying(200),
    last_updated_by character varying(200),
    last_updated_on character varying DEFAULT CURRENT_TIMESTAMP NOT NULL
);
    DROP TABLE public.privilege;
       public         heap    postgres    false            �            1259    37284    privilege_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.privilege_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.privilege_r_no_seq;
       public          postgres    false    227            �           0    0    privilege_r_no_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.privilege_r_no_seq OWNED BY public.privilege.r_no;
          public          postgres    false    228            �            1259    37285    roles    TABLE     �   CREATE TABLE public.roles (
    r_no integer NOT NULL,
    role character varying(200),
    last_updated_by character varying(200),
    last_updated_on character varying DEFAULT CURRENT_TIMESTAMP,
    role_id character varying(100)
);
    DROP TABLE public.roles;
       public         heap    postgres    false            �            1259    37291    roles_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.roles_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.roles_r_no_seq;
       public          postgres    false    229            �           0    0    roles_r_no_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.roles_r_no_seq OWNED BY public.roles.r_no;
          public          postgres    false    230            �            1259    37292    site    TABLE     �  CREATE TABLE public.site (
    r_no integer NOT NULL,
    site_id character varying(200),
    site_name character varying(200),
    location_id character varying(100),
    last_updated_by character varying(200),
    last_updated_on character varying DEFAULT CURRENT_TIMESTAMP,
    company character varying(200),
    site_status character varying(50) DEFAULT '1'::character varying
);
    DROP TABLE public.site;
       public         heap    postgres    false            �            1259    37299    site_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.site_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.site_r_no_seq;
       public          postgres    false    231            �           0    0    site_r_no_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.site_r_no_seq OWNED BY public.site.r_no;
          public          postgres    false    232            �            1259    37300    site_site_id_seq    SEQUENCE     �   CREATE SEQUENCE public.site_site_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 '   DROP SEQUENCE public.site_site_id_seq;
       public          postgres    false    231            �           0    0    site_site_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.site_site_id_seq OWNED BY public.site.site_id;
          public          postgres    false    233            �            1259    37301    user    TABLE     *  CREATE TABLE public."user" (
    r_no integer NOT NULL,
    user_id character varying(200),
    first_name character varying(200),
    last_name character varying(200),
    role_id character varying(200),
    contact character varying(200),
    site_id character varying(200),
    status character varying(200) DEFAULT 1,
    active character varying(200) DEFAULT 1,
    last_updated_by character varying(200),
    last_updated_on character varying DEFAULT CURRENT_TIMESTAMP,
    email character varying(2000),
    designation character varying(2000)
);
    DROP TABLE public."user";
       public         heap    postgres    false            �            1259    37309    user_access_control    TABLE     2  CREATE TABLE public.user_access_control (
    r_no integer NOT NULL,
    site_id character varying(200),
    user_id character varying,
    site_management character varying(10),
    user_management character varying(10),
    device_management character varying(10),
    dashboard character varying(10)
);
 '   DROP TABLE public.user_access_control;
       public         heap    postgres    false            �            1259    37314    user_access_control_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.user_access_control_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.user_access_control_r_no_seq;
       public          postgres    false    235            �           0    0    user_access_control_r_no_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.user_access_control_r_no_seq OWNED BY public.user_access_control.r_no;
          public          postgres    false    236            �            1259    37315    user_credential    TABLE       CREATE TABLE public.user_credential (
    r_no integer NOT NULL,
    user_id character varying(200),
    user_name character varying(200),
    password character varying(200),
    last_updated_by character varying(200),
    last_updated_on character varying DEFAULT CURRENT_TIMESTAMP
);
 #   DROP TABLE public.user_credential;
       public         heap    postgres    false            �            1259    37321    user_credential_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.user_credential_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.user_credential_r_no_seq;
       public          postgres    false    237            �           0    0    user_credential_r_no_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.user_credential_r_no_seq OWNED BY public.user_credential.r_no;
          public          postgres    false    238            �            1259    37322    user_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.user_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.user_r_no_seq;
       public          postgres    false    234            �           0    0    user_r_no_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.user_r_no_seq OWNED BY public."user".r_no;
          public          postgres    false    239            �            1259    37323    user_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 '   DROP SEQUENCE public.user_user_id_seq;
       public          postgres    false    234            �           0    0    user_user_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.user_user_id_seq OWNED BY public."user".user_id;
          public          postgres    false    240            �           2604    37324    alert_boundary r_no    DEFAULT     z   ALTER TABLE ONLY public.alert_boundary ALTER COLUMN r_no SET DEFAULT nextval('public.alert_boundary_r_no_seq'::regclass);
 B   ALTER TABLE public.alert_boundary ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    218    216            �           2604    37325    alert_boundary boundary_id    DEFAULT     �   ALTER TABLE ONLY public.alert_boundary ALTER COLUMN boundary_id SET DEFAULT ('BI'::text || nextval('public.alert_boundary_boundary_id'::regclass));
 I   ALTER TABLE public.alert_boundary ALTER COLUMN boundary_id DROP DEFAULT;
       public          postgres    false    217    216            �           2604    37326    alert_setting r_no    DEFAULT     x   ALTER TABLE ONLY public.alert_setting ALTER COLUMN r_no SET DEFAULT nextval('public.alert_setting_r_no_seq'::regclass);
 A   ALTER TABLE public.alert_setting ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    221    219            �           2604    37327    alert_setting alert_setting_id    DEFAULT     �   ALTER TABLE ONLY public.alert_setting ALTER COLUMN alert_setting_id SET DEFAULT ('ASI'::text || nextval('public.alert_setting_alert_id'::regclass));
 M   ALTER TABLE public.alert_setting ALTER COLUMN alert_setting_id DROP DEFAULT;
       public          postgres    false    220    219            �           2604    37328    department r_no    DEFAULT     r   ALTER TABLE ONLY public.department ALTER COLUMN r_no SET DEFAULT nextval('public.department_r_no_seq'::regclass);
 >   ALTER TABLE public.department ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    223    222            �           2604    37329    location r_no    DEFAULT     n   ALTER TABLE ONLY public.location ALTER COLUMN r_no SET DEFAULT nextval('public.location_r_no_seq'::regclass);
 <   ALTER TABLE public.location ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    226    224            �           2604    37330    location location_id    DEFAULT     �   ALTER TABLE ONLY public.location ALTER COLUMN location_id SET DEFAULT ('LI'::text || nextval('public.location_location_id'::regclass));
 C   ALTER TABLE public.location ALTER COLUMN location_id DROP DEFAULT;
       public          postgres    false    225    224            �           2604    37331    privilege r_no    DEFAULT     p   ALTER TABLE ONLY public.privilege ALTER COLUMN r_no SET DEFAULT nextval('public.privilege_r_no_seq'::regclass);
 =   ALTER TABLE public.privilege ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    228    227            �           2604    37332 
   roles r_no    DEFAULT     h   ALTER TABLE ONLY public.roles ALTER COLUMN r_no SET DEFAULT nextval('public.roles_r_no_seq'::regclass);
 9   ALTER TABLE public.roles ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    230    229            �           2604    37333 	   site r_no    DEFAULT     f   ALTER TABLE ONLY public.site ALTER COLUMN r_no SET DEFAULT nextval('public.site_r_no_seq'::regclass);
 8   ALTER TABLE public.site ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    232    231            �           2604    37334    site site_id    DEFAULT     |   ALTER TABLE ONLY public.site ALTER COLUMN site_id SET DEFAULT ('SI'::text || nextval('public.site_site_id_seq'::regclass));
 ;   ALTER TABLE public.site ALTER COLUMN site_id DROP DEFAULT;
       public          postgres    false    233    231            �           2604    37335 	   user r_no    DEFAULT     h   ALTER TABLE ONLY public."user" ALTER COLUMN r_no SET DEFAULT nextval('public.user_r_no_seq'::regclass);
 :   ALTER TABLE public."user" ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    239    234            �           2604    37336    user user_id    DEFAULT     ~   ALTER TABLE ONLY public."user" ALTER COLUMN user_id SET DEFAULT ('UI'::text || nextval('public.user_user_id_seq'::regclass));
 =   ALTER TABLE public."user" ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    240    234            �           2604    37337    user_access_control r_no    DEFAULT     �   ALTER TABLE ONLY public.user_access_control ALTER COLUMN r_no SET DEFAULT nextval('public.user_access_control_r_no_seq'::regclass);
 G   ALTER TABLE public.user_access_control ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    236    235            �           2604    37338    user_credential r_no    DEFAULT     |   ALTER TABLE ONLY public.user_credential ALTER COLUMN r_no SET DEFAULT nextval('public.user_credential_r_no_seq'::regclass);
 C   ALTER TABLE public.user_credential ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    238    237            �          0    37251    alert_boundary 
   TABLE DATA           g   COPY public.alert_boundary (r_no, boundary_id, boundary, last_updated_by, last_updated_on) FROM stdin;
    public          postgres    false    216   wv       �          0    37257    alert_setting 
   TABLE DATA           p   COPY public.alert_setting (r_no, alert_setting_id, alert_category, last_updated_by, last_update_on) FROM stdin;
    public          postgres    false    219   �v       �          0    37263 
   department 
   TABLE DATA           l   COPY public.department (r_no, department_name, last_updated_by, last_updated_on, department_id) FROM stdin;
    public          postgres    false    222   �v       �          0    37270    location 
   TABLE DATA           o   COPY public.location (r_no, location_id, location_name, last_updated_by, last_updated_on, address) FROM stdin;
    public          postgres    false    224   w       �          0    37278 	   privilege 
   TABLE DATA           d   COPY public.privilege (r_no, privilege_id, privilege, last_updated_by, last_updated_on) FROM stdin;
    public          postgres    false    227   �w       �          0    37285    roles 
   TABLE DATA           V   COPY public.roles (r_no, role, last_updated_by, last_updated_on, role_id) FROM stdin;
    public          postgres    false    229   �w       �          0    37292    site 
   TABLE DATA           }   COPY public.site (r_no, site_id, site_name, location_id, last_updated_by, last_updated_on, company, site_status) FROM stdin;
    public          postgres    false    231   Mx       �          0    37301    user 
   TABLE DATA           �   COPY public."user" (r_no, user_id, first_name, last_name, role_id, contact, site_id, status, active, last_updated_by, last_updated_on, email, designation) FROM stdin;
    public          postgres    false    234   �x       �          0    37309    user_access_control 
   TABLE DATA           �   COPY public.user_access_control (r_no, site_id, user_id, site_management, user_management, device_management, dashboard) FROM stdin;
    public          postgres    false    235   �y       �          0    37315    user_credential 
   TABLE DATA           o   COPY public.user_credential (r_no, user_id, user_name, password, last_updated_by, last_updated_on) FROM stdin;
    public          postgres    false    237   z       �           0    0    alert_boundary_boundary_id    SEQUENCE SET     H   SELECT pg_catalog.setval('public.alert_boundary_boundary_id', 3, true);
          public          postgres    false    217            �           0    0    alert_boundary_r_no_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.alert_boundary_r_no_seq', 3, true);
          public          postgres    false    218            �           0    0    alert_setting_alert_id    SEQUENCE SET     D   SELECT pg_catalog.setval('public.alert_setting_alert_id', 2, true);
          public          postgres    false    220            �           0    0    alert_setting_r_no_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.alert_setting_r_no_seq', 2, true);
          public          postgres    false    221            �           0    0    department_r_no_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.department_r_no_seq', 1, false);
          public          postgres    false    223            �           0    0    location_location_id    SEQUENCE SET     B   SELECT pg_catalog.setval('public.location_location_id', 3, true);
          public          postgres    false    225            �           0    0    location_r_no_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.location_r_no_seq', 3, true);
          public          postgres    false    226            �           0    0    privilege_r_no_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.privilege_r_no_seq', 1, false);
          public          postgres    false    228            �           0    0    roles_r_no_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.roles_r_no_seq', 1, false);
          public          postgres    false    230            �           0    0    site_r_no_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.site_r_no_seq', 3, true);
          public          postgres    false    232            �           0    0    site_site_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.site_site_id_seq', 3, true);
          public          postgres    false    233            �           0    0    user_access_control_r_no_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.user_access_control_r_no_seq', 3, true);
          public          postgres    false    236            �           0    0    user_credential_r_no_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.user_credential_r_no_seq', 3, true);
          public          postgres    false    238            �           0    0    user_r_no_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.user_r_no_seq', 3, true);
          public          postgres    false    239            �           0    0    user_user_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.user_user_id_seq', 3, true);
          public          postgres    false    240            �           2606    37340 "   alert_boundary alert_boundary_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.alert_boundary
    ADD CONSTRAINT alert_boundary_pkey PRIMARY KEY (r_no);
 L   ALTER TABLE ONLY public.alert_boundary DROP CONSTRAINT alert_boundary_pkey;
       public            postgres    false    216            �           2606    37342     alert_setting alert_setting_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.alert_setting
    ADD CONSTRAINT alert_setting_pkey PRIMARY KEY (r_no);
 J   ALTER TABLE ONLY public.alert_setting DROP CONSTRAINT alert_setting_pkey;
       public            postgres    false    219            �           2606    37344    department department_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.department
    ADD CONSTRAINT department_pkey PRIMARY KEY (r_no);
 D   ALTER TABLE ONLY public.department DROP CONSTRAINT department_pkey;
       public            postgres    false    222            �           2606    37346    location location_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.location
    ADD CONSTRAINT location_pkey PRIMARY KEY (r_no);
 @   ALTER TABLE ONLY public.location DROP CONSTRAINT location_pkey;
       public            postgres    false    224            �           2606    37348    privilege privilege_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.privilege
    ADD CONSTRAINT privilege_pkey PRIMARY KEY (r_no);
 B   ALTER TABLE ONLY public.privilege DROP CONSTRAINT privilege_pkey;
       public            postgres    false    227            �           2606    37350    roles roles_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (r_no);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    229            �           2606    37352    site site_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.site
    ADD CONSTRAINT site_pkey PRIMARY KEY (r_no);
 8   ALTER TABLE ONLY public.site DROP CONSTRAINT site_pkey;
       public            postgres    false    231            �           2606    37354    user uc_email 
   CONSTRAINT     K   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT uc_email UNIQUE (email);
 9   ALTER TABLE ONLY public."user" DROP CONSTRAINT uc_email;
       public            postgres    false    234            �           2606    37356 ,   user_access_control user_access_control_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.user_access_control
    ADD CONSTRAINT user_access_control_pkey PRIMARY KEY (r_no);
 V   ALTER TABLE ONLY public.user_access_control DROP CONSTRAINT user_access_control_pkey;
       public            postgres    false    235            �           2606    37358 $   user_credential user_credential_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.user_credential
    ADD CONSTRAINT user_credential_pkey PRIMARY KEY (r_no);
 N   ALTER TABLE ONLY public.user_credential DROP CONSTRAINT user_credential_pkey;
       public            postgres    false    237            �           2606    37360    user user_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (r_no);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public            postgres    false    234            �           2620    37361    user sync_user_id_trigger    TRIGGER     �   CREATE TRIGGER sync_user_id_trigger AFTER INSERT OR UPDATE ON public."user" FOR EACH ROW EXECUTE FUNCTION public.sync_user_id_in_credentials();
 4   DROP TRIGGER sync_user_id_trigger ON public."user";
       public          postgres    false    283    234            �   .   x�3�t�4䴱�LL������2�q�!�E�9m�Db���� �:�      �   3   x�3�t�4�tN,-����LL������2�q:e�d&'� $b���� �J�      �      x������ � �      �   �   x�u�1
1�:9Ez�0&	��,E�,m�0��XQ��na�x�ǃ;���6=kΦ[뎉e�q �J�Lu$��*��6���6{^9���.�׷F 4�1�T?zۻyY��{9�(��Kb~�s�޿!-�      �      x������ � �      �   {   x�}ͫ�0@Q���z��}%ٍ����DT��QDL1ם��m}>��.����e�2�ĕJ%�F��0U�p�	�G/��ړjQ��k'$��O����Y9#wR@7���*%&O���
� _f]6�      �   �   x�U̻
�@��z�)�K��d�u�X5�iAIa�$����&Ձ�O�6�6�YJL%aA�4��q����p��a�C���f�w�eo^� Ҋ��Ly	��<ͽa1,P?�ެ�,��ZU>FN),��z���4�y��4)'      �   �   x�m�=kA��z�W�'.��U�#$���f�]�z�!�>=��f`��}>z�4�|��G$ m���<���5���T`dY�_.H"aT�z~BӖ[�eWR>��T`/�a:���2�����
������y�>���QL4�k��r�|�>����钿SM_���a���(/�F
Qke�����gkՂ��!�Q]�� ES\�      �   1   x�3�,I�-���4�4CC.#�` /�ӈ� *b1��Eb���� p�
�      �   �   x�Mι�0�z��Q�=|$�����Kc%�� ���1�.��7Cp=�-���cz������PҺǲ#ˈ�H8�� ���8�mJ*"p��T2
�N"X.�r��`�v����`�qO�چ;���;"6XԌ��4e�J��4�     