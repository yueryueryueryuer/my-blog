# 硬盘

## 硬盘组织方式

linux 硬盘组织方式为:引导区、超级块（superblock)、索引结点（inode)、数据块（datablock)、目录块 （diredtory block)。

超级块：包含了关于该硬盘或分区上的文件系统的整体信息，如文件系统的大小等；
索引结点：包含了针对某一个具体文件的几乎全部信息，如文件的存取权限、所有者、大小、建立时间以及对应的目录块和数据块等；索引结点中不包括文件的名字，文件名是放在目录块里的
数据块：真正存储文件内容的位置。
目录块：包含有文件的名字以及此文件的索引结点编号。
