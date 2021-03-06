// /*
//  *  The attached / following is part of SharpMap.Data.Providers.Gml
//  *  SharpMap.Data.Providers.Gml is free software � 2008 Newgrove Consultants Limited, 
//  *  www.newgrove.com; you can redistribute it and/or modify it under the terms 
//  *  of the current GNU Lesser General Public License (LGPL) as published by and 
//  *  available from the Free Software Foundation, Inc., 
//  *  59 Temple Place, Suite 330, Boston, MA 02111-1307 USA: http://fsf.org/    
//  *  This program is distributed without any warranty; 
//  *  without even the implied warranty of merchantability or fitness for purpose.  
//  *  See the GNU Lesser General Public License for the full details. 
//  *  
//  *  Author: John Diss 2009
//  * 
//  */
using System;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Xml.Schema;
using System.Xml.Serialization;

namespace SharpMap.Entities.Ogc.Gml
{
    [Serializable, XmlType(TypeName = "ArrayAssociationType", Namespace = Declarations.SchemaVersion)]
    public class ArrayAssociationType
    {
        [XmlIgnore] private List<string> _abstractObject;
        [XmlIgnore] private bool _owns;
        [XmlIgnore] public bool OwnsSpecified;

        public ArrayAssociationType()
        {
            Owns = false;
        }

        [XmlElement(Type = typeof (string), ElementName = "AbstractObject", IsNullable = false,
            Form = XmlSchemaForm.Qualified, Namespace = Declarations.SchemaVersion)]
        public List<string> AbstractObject
        {
            get
            {
                if (_abstractObject == null)
                {
                    _abstractObject = new List<string>();
                }
                return _abstractObject;
            }
            set { _abstractObject = value; }
        }

        [XmlIgnore]
        public int Count
        {
            get { return AbstractObject.Count; }
        }

        [XmlIgnore]
        public string this[int index]
        {
            get { return AbstractObject[index]; }
        }

        [XmlAttribute(AttributeName = "owns", DataType = "boolean")]
        public bool Owns
        {
            get { return _owns; }
            set
            {
                _owns = value;
                OwnsSpecified = true;
            }
        }

        public void Add(string obj)
        {
            AbstractObject.Add(obj);
        }

        public void Clear()
        {
            AbstractObject.Clear();
        }

        [DispId(-4)]
        public IEnumerator GetEnumerator()
        {
            return AbstractObject.GetEnumerator();
        }

        public virtual void MakeSchemaCompliant()
        {
        }

        public string Remove(int index)
        {
            string obj = AbstractObject[index];
            AbstractObject.Remove(obj);
            return obj;
        }

        public bool Remove(string obj)
        {
            return AbstractObject.Remove(obj);
        }
    }
}