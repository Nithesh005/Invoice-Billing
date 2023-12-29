PGDMP     (                    {            mainbilling    15.2    15.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16425    mainbilling    DATABASE     ~   CREATE DATABASE mainbilling WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_India.1252';
    DROP DATABASE mainbilling;
                postgres    false            �            1259    16437    accesscontroll    TABLE     �   CREATE TABLE public.accesscontroll (
    rno character varying(2),
    manufacturer character varying(2),
    distributer character varying(2),
    customer character varying(2)
);
 "   DROP TABLE public.accesscontroll;
       public         heap    postgres    false            �            1259    16434    credentials    TABLE     �   CREATE TABLE public.credentials (
    rno character varying(6),
    userid character varying(20),
    username character varying(50),
    password character varying(50),
    lastupdatedby character varying(50),
    updatedon character varying(16)
);
    DROP TABLE public.credentials;
       public         heap    postgres    false            �            1259    16446    district    TABLE     �   CREATE TABLE public.district (
    rno character varying(6),
    stateid character varying(6),
    districtid character varying(6),
    districtcode character varying(6),
    districtname character varying(50)
);
    DROP TABLE public.district;
       public         heap    postgres    false            �            1259    16431    position    TABLE     �   CREATE TABLE public."position" (
    rno character varying(6),
    positionid character varying(2),
    "position" character varying(20),
    lastupdatedby character varying(50),
    updatedon character varying(16)
);
    DROP TABLE public."position";
       public         heap    postgres    false            �            1259    16443 	   previlage    TABLE     �   CREATE TABLE public.previlage (
    rno character varying(6),
    previlageid character varying(6),
    previlage character varying(30),
    lastupdatedby character varying(50),
    updatedon character varying(16)
);
    DROP TABLE public.previlage;
       public         heap    postgres    false            �            1259    16440    state    TABLE     �   CREATE TABLE public.state (
    rno character varying(6),
    stateid character varying(6),
    statecode character varying(6),
    statename character varying(50),
    lastupdatedby character varying(50),
    updatedon character varying(16)
);
    DROP TABLE public.state;
       public         heap    postgres    false            �            1259    16426    user    TABLE     1  CREATE TABLE public."user" (
    rno character varying(6),
    userid character varying(20),
    email character varying(50),
    phno character varying(10),
    altphoneno character varying(10),
    aadhar character varying(12),
    pan character varying(12),
    name character varying(50),
    positionid character varying(2),
    adminid character varying(20),
    updatedon character varying(16),
    updatedby character varying(50),
    status character varying(1),
    userprofile character varying(10),
    pstreetname character varying(50),
    pdistrictid character varying(50),
    pstateid character varying(30),
    ppostalcode character varying(6),
    cstreetname character varying(50),
    cdistrictid character varying(30),
    cstateid character varying(30),
    cpostalcode character varying(6)
);
    DROP TABLE public."user";
       public         heap    postgres    false                      0    16437    accesscontroll 
   TABLE DATA           R   COPY public.accesscontroll (rno, manufacturer, distributer, customer) FROM stdin;
    public          postgres    false    217                    0    16434    credentials 
   TABLE DATA           `   COPY public.credentials (rno, userid, username, password, lastupdatedby, updatedon) FROM stdin;
    public          postgres    false    216   +                 0    16446    district 
   TABLE DATA           X   COPY public.district (rno, stateid, districtid, districtcode, districtname) FROM stdin;
    public          postgres    false    220   H                 0    16431    position 
   TABLE DATA           [   COPY public."position" (rno, positionid, "position", lastupdatedby, updatedon) FROM stdin;
    public          postgres    false    215   +                 0    16443 	   previlage 
   TABLE DATA           Z   COPY public.previlage (rno, previlageid, previlage, lastupdatedby, updatedon) FROM stdin;
    public          postgres    false    219   H                 0    16440    state 
   TABLE DATA           ]   COPY public.state (rno, stateid, statecode, statename, lastupdatedby, updatedon) FROM stdin;
    public          postgres    false    218   e       
          0    16426    user 
   TABLE DATA           �   COPY public."user" (rno, userid, email, phno, altphoneno, aadhar, pan, name, positionid, adminid, updatedon, updatedby, status, userprofile, pstreetname, pdistrictid, pstateid, ppostalcode, cstreetname, cdistrictid, cstateid, cpostalcode) FROM stdin;
    public          postgres    false    214                x������ � �            x������ � �         �  x�=��n�0���sC�����Pӈ���fPp��o�1&ݞ3���g$�Q� +AF�Po�1��qk�I�����6����4b����n���wj��oG�-��&k�����-G�t������Dcƺ��(�Q�Sg���J���-�=�%nK��oH�3~���4BJo�(J6��.@��3��\��#�g���,z�t��\Hͳ�n䊸�)cg��7�&!N9��]燐1��|����_�7K�D8_0��v�8�n�Mb���4�-y���F;|fxP߰�)��9��{�;�����s�;z(x�d��n����_sQ�Xn4Wz�$E���8έ�l��c�jφZ�14M�k�;T9f6u�?g��ƨ΋�ٺ�����*�����>����+>��k���;���VU��K<_gs=�WY.4ܾ��x�~������d�غ�.x#��B�m9�h            x������ � �            x������ � �         �  x����n�0E�W_�HCR~�K��1���n�G�HI��!�����ѥ�8+����(�5R@"��@͌�N�7U��4h�>4��|ej�hA�wF��N�;Sʀ{��Y?�VP(b#���
j�3��Y�[|���xK�j-��bG����ڠ#<^h���ڢ��8�Ĕ����e<_)dvP;�	O���X� ��R�`)4��0ā���@FZ�1'� �	Gj���I�oE()Q��svk>�*�i�Bo �Ƕ��5粅��qt��M[���$۞��[��D1��
��s��h��;��L!�1�n\&SSA�K9�.�|���R���:�Z)��.�����'�u6��@�'�L�����B��:�`�L���ژʇV�3��~�3y?��Td9�ˌ����(�H�E      
   �   x�͎Kn�0D��S�II���A���uG�-��/� E��1��c���o�e\���?˂!E�	�SR/�s>hL��=O`4�B�g��aߚlO!���3�y�r=�L$h5�����������P��Z�=�����v*E9�d�1�+��pf9[�u�Fc҄��k�����A%��5os-�Ox��d��H>���~ ��f     